import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { RespondActivityTaskCanceledInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RespondActivityTaskCanceledCommandInput = RespondActivityTaskCanceledInput;
export declare type RespondActivityTaskCanceledCommandOutput = __MetadataBearer;
export declare class RespondActivityTaskCanceledCommand extends $Command<RespondActivityTaskCanceledCommandInput, RespondActivityTaskCanceledCommandOutput, SWFClientResolvedConfig> {
    readonly input: RespondActivityTaskCanceledCommandInput;
    constructor(input: RespondActivityTaskCanceledCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RespondActivityTaskCanceledCommandInput, RespondActivityTaskCanceledCommandOutput>;
    private serialize;
    private deserialize;
}
