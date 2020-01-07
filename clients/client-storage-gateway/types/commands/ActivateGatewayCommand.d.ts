import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ActivateGatewayInput, ActivateGatewayOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ActivateGatewayCommandInput = ActivateGatewayInput;
export declare type ActivateGatewayCommandOutput = ActivateGatewayOutput & __MetadataBearer;
export declare class ActivateGatewayCommand extends $Command<ActivateGatewayCommandInput, ActivateGatewayCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: ActivateGatewayCommandInput;
    constructor(input: ActivateGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ActivateGatewayCommandInput, ActivateGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
