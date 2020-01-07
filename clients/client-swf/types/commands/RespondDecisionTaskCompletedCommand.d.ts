import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { RespondDecisionTaskCompletedInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RespondDecisionTaskCompletedCommandInput = RespondDecisionTaskCompletedInput;
export declare type RespondDecisionTaskCompletedCommandOutput = __MetadataBearer;
export declare class RespondDecisionTaskCompletedCommand extends $Command<RespondDecisionTaskCompletedCommandInput, RespondDecisionTaskCompletedCommandOutput, SWFClientResolvedConfig> {
    readonly input: RespondDecisionTaskCompletedCommandInput;
    constructor(input: RespondDecisionTaskCompletedCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RespondDecisionTaskCompletedCommandInput, RespondDecisionTaskCompletedCommandOutput>;
    private serialize;
    private deserialize;
}
