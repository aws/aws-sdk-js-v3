import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { UpdateLogPatternRequest, UpdateLogPatternResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateLogPatternCommandInput = UpdateLogPatternRequest;
export declare type UpdateLogPatternCommandOutput = UpdateLogPatternResponse & __MetadataBearer;
export declare class UpdateLogPatternCommand extends $Command<UpdateLogPatternCommandInput, UpdateLogPatternCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: UpdateLogPatternCommandInput;
    constructor(input: UpdateLogPatternCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLogPatternCommandInput, UpdateLogPatternCommandOutput>;
    private serialize;
    private deserialize;
}
