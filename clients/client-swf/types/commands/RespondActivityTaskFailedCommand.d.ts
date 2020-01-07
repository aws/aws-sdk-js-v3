import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { RespondActivityTaskFailedInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RespondActivityTaskFailedCommandInput = RespondActivityTaskFailedInput;
export declare type RespondActivityTaskFailedCommandOutput = __MetadataBearer;
export declare class RespondActivityTaskFailedCommand extends $Command<RespondActivityTaskFailedCommandInput, RespondActivityTaskFailedCommandOutput, SWFClientResolvedConfig> {
    readonly input: RespondActivityTaskFailedCommandInput;
    constructor(input: RespondActivityTaskFailedCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RespondActivityTaskFailedCommandInput, RespondActivityTaskFailedCommandOutput>;
    private serialize;
    private deserialize;
}
