import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { DeleteLogPatternRequest, DeleteLogPatternResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLogPatternCommandInput = DeleteLogPatternRequest;
export declare type DeleteLogPatternCommandOutput = DeleteLogPatternResponse & __MetadataBearer;
export declare class DeleteLogPatternCommand extends $Command<DeleteLogPatternCommandInput, DeleteLogPatternCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: DeleteLogPatternCommandInput;
    constructor(input: DeleteLogPatternCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLogPatternCommandInput, DeleteLogPatternCommandOutput>;
    private serialize;
    private deserialize;
}
