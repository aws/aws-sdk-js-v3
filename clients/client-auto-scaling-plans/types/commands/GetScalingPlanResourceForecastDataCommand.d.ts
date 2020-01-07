import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient";
import { GetScalingPlanResourceForecastDataRequest, GetScalingPlanResourceForecastDataResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetScalingPlanResourceForecastDataCommandInput = GetScalingPlanResourceForecastDataRequest;
export declare type GetScalingPlanResourceForecastDataCommandOutput = GetScalingPlanResourceForecastDataResponse & __MetadataBearer;
export declare class GetScalingPlanResourceForecastDataCommand extends $Command<GetScalingPlanResourceForecastDataCommandInput, GetScalingPlanResourceForecastDataCommandOutput, AutoScalingPlansClientResolvedConfig> {
    readonly input: GetScalingPlanResourceForecastDataCommandInput;
    constructor(input: GetScalingPlanResourceForecastDataCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingPlansClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetScalingPlanResourceForecastDataCommandInput, GetScalingPlanResourceForecastDataCommandOutput>;
    private serialize;
    private deserialize;
}
