import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { SubmitContainerStateChangeRequest, SubmitContainerStateChangeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SubmitContainerStateChangeCommandInput = SubmitContainerStateChangeRequest;
export declare type SubmitContainerStateChangeCommandOutput = SubmitContainerStateChangeResponse & __MetadataBearer;
export declare class SubmitContainerStateChangeCommand extends $Command<SubmitContainerStateChangeCommandInput, SubmitContainerStateChangeCommandOutput, ECSClientResolvedConfig> {
    readonly input: SubmitContainerStateChangeCommandInput;
    constructor(input: SubmitContainerStateChangeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SubmitContainerStateChangeCommandInput, SubmitContainerStateChangeCommandOutput>;
    private serialize;
    private deserialize;
}
