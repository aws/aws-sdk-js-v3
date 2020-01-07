import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { GetSolutionMetricsRequest, GetSolutionMetricsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSolutionMetricsCommandInput = GetSolutionMetricsRequest;
export declare type GetSolutionMetricsCommandOutput = GetSolutionMetricsResponse & __MetadataBearer;
export declare class GetSolutionMetricsCommand extends $Command<GetSolutionMetricsCommandInput, GetSolutionMetricsCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: GetSolutionMetricsCommandInput;
    constructor(input: GetSolutionMetricsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSolutionMetricsCommandInput, GetSolutionMetricsCommandOutput>;
    private serialize;
    private deserialize;
}
