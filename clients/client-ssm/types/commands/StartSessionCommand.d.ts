import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { StartSessionRequest, StartSessionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartSessionCommandInput = StartSessionRequest;
export declare type StartSessionCommandOutput = StartSessionResponse & __MetadataBearer;
export declare class StartSessionCommand extends $Command<StartSessionCommandInput, StartSessionCommandOutput, SSMClientResolvedConfig> {
    readonly input: StartSessionCommandInput;
    constructor(input: StartSessionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartSessionCommandInput, StartSessionCommandOutput>;
    private serialize;
    private deserialize;
}
