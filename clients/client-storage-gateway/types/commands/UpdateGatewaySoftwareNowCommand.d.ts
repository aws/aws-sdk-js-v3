import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateGatewaySoftwareNowInput, UpdateGatewaySoftwareNowOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateGatewaySoftwareNowCommandInput = UpdateGatewaySoftwareNowInput;
export declare type UpdateGatewaySoftwareNowCommandOutput = UpdateGatewaySoftwareNowOutput & __MetadataBearer;
export declare class UpdateGatewaySoftwareNowCommand extends $Command<UpdateGatewaySoftwareNowCommandInput, UpdateGatewaySoftwareNowCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateGatewaySoftwareNowCommandInput;
    constructor(input: UpdateGatewaySoftwareNowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGatewaySoftwareNowCommandInput, UpdateGatewaySoftwareNowCommandOutput>;
    private serialize;
    private deserialize;
}
