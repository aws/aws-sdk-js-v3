import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateGatewayInformationInput, UpdateGatewayInformationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateGatewayInformationCommandInput = UpdateGatewayInformationInput;
export declare type UpdateGatewayInformationCommandOutput = UpdateGatewayInformationOutput & __MetadataBearer;
export declare class UpdateGatewayInformationCommand extends $Command<UpdateGatewayInformationCommandInput, UpdateGatewayInformationCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateGatewayInformationCommandInput;
    constructor(input: UpdateGatewayInformationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGatewayInformationCommandInput, UpdateGatewayInformationCommandOutput>;
    private serialize;
    private deserialize;
}
