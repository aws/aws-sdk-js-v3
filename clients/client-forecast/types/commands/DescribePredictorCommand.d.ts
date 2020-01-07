import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { DescribePredictorRequest, DescribePredictorResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePredictorCommandInput = DescribePredictorRequest;
export declare type DescribePredictorCommandOutput = DescribePredictorResponse & __MetadataBearer;
export declare class DescribePredictorCommand extends $Command<DescribePredictorCommandInput, DescribePredictorCommandOutput, forecastClientResolvedConfig> {
    readonly input: DescribePredictorCommandInput;
    constructor(input: DescribePredictorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePredictorCommandInput, DescribePredictorCommandOutput>;
    private serialize;
    private deserialize;
}
