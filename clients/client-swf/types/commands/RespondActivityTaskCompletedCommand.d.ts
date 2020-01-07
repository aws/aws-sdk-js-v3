import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { RespondActivityTaskCompletedInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RespondActivityTaskCompletedCommandInput = RespondActivityTaskCompletedInput;
export declare type RespondActivityTaskCompletedCommandOutput = __MetadataBearer;
export declare class RespondActivityTaskCompletedCommand extends $Command<RespondActivityTaskCompletedCommandInput, RespondActivityTaskCompletedCommandOutput, SWFClientResolvedConfig> {
    readonly input: RespondActivityTaskCompletedCommandInput;
    constructor(input: RespondActivityTaskCompletedCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RespondActivityTaskCompletedCommandInput, RespondActivityTaskCompletedCommandOutput>;
    private serialize;
    private deserialize;
}
