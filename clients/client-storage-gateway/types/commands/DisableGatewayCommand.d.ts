import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DisableGatewayInput, DisableGatewayOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableGatewayCommandInput = DisableGatewayInput;
export declare type DisableGatewayCommandOutput = DisableGatewayOutput & __MetadataBearer;
export declare class DisableGatewayCommand extends $Command<DisableGatewayCommandInput, DisableGatewayCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DisableGatewayCommandInput;
    constructor(input: DisableGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableGatewayCommandInput, DisableGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
