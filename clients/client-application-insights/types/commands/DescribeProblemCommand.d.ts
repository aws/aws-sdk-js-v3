import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { DescribeProblemRequest, DescribeProblemResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeProblemCommandInput = DescribeProblemRequest;
export declare type DescribeProblemCommandOutput = DescribeProblemResponse & __MetadataBearer;
export declare class DescribeProblemCommand extends $Command<DescribeProblemCommandInput, DescribeProblemCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: DescribeProblemCommandInput;
    constructor(input: DescribeProblemCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProblemCommandInput, DescribeProblemCommandOutput>;
    private serialize;
    private deserialize;
}
