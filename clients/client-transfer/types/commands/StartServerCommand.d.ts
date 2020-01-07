import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { StartServerRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartServerCommandInput = StartServerRequest;
export declare type StartServerCommandOutput = __MetadataBearer;
export declare class StartServerCommand extends $Command<StartServerCommandInput, StartServerCommandOutput, TransferClientResolvedConfig> {
    readonly input: StartServerCommandInput;
    constructor(input: StartServerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartServerCommandInput, StartServerCommandOutput>;
    private serialize;
    private deserialize;
}
