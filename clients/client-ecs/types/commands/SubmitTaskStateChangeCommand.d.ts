import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { SubmitTaskStateChangeRequest, SubmitTaskStateChangeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SubmitTaskStateChangeCommandInput = SubmitTaskStateChangeRequest;
export declare type SubmitTaskStateChangeCommandOutput = SubmitTaskStateChangeResponse & __MetadataBearer;
export declare class SubmitTaskStateChangeCommand extends $Command<SubmitTaskStateChangeCommandInput, SubmitTaskStateChangeCommandOutput, ECSClientResolvedConfig> {
    readonly input: SubmitTaskStateChangeCommandInput;
    constructor(input: SubmitTaskStateChangeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SubmitTaskStateChangeCommandInput, SubmitTaskStateChangeCommandOutput>;
    private serialize;
    private deserialize;
}
