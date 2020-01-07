import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { StopServerRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopServerCommandInput = StopServerRequest;
export declare type StopServerCommandOutput = __MetadataBearer;
export declare class StopServerCommand extends $Command<StopServerCommandInput, StopServerCommandOutput, TransferClientResolvedConfig> {
    readonly input: StopServerCommandInput;
    constructor(input: StopServerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopServerCommandInput, StopServerCommandOutput>;
    private serialize;
    private deserialize;
}
