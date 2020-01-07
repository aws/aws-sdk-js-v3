import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { DescribeProblemObservationsRequest, DescribeProblemObservationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeProblemObservationsCommandInput = DescribeProblemObservationsRequest;
export declare type DescribeProblemObservationsCommandOutput = DescribeProblemObservationsResponse & __MetadataBearer;
export declare class DescribeProblemObservationsCommand extends $Command<DescribeProblemObservationsCommandInput, DescribeProblemObservationsCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: DescribeProblemObservationsCommandInput;
    constructor(input: DescribeProblemObservationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProblemObservationsCommandInput, DescribeProblemObservationsCommandOutput>;
    private serialize;
    private deserialize;
}
