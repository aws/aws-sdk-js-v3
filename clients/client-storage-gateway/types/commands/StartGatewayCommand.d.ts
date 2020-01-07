import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { StartGatewayInput, StartGatewayOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartGatewayCommandInput = StartGatewayInput;
export declare type StartGatewayCommandOutput = StartGatewayOutput & __MetadataBearer;
export declare class StartGatewayCommand extends $Command<StartGatewayCommandInput, StartGatewayCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: StartGatewayCommandInput;
    constructor(input: StartGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartGatewayCommandInput, StartGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
