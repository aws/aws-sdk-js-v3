import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseMetricDataRequest, GetRelationalDatabaseMetricDataResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRelationalDatabaseMetricDataCommandInput = GetRelationalDatabaseMetricDataRequest;
export declare type GetRelationalDatabaseMetricDataCommandOutput = GetRelationalDatabaseMetricDataResult & __MetadataBearer;
export declare class GetRelationalDatabaseMetricDataCommand extends $Command<GetRelationalDatabaseMetricDataCommandInput, GetRelationalDatabaseMetricDataCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabaseMetricDataCommandInput;
    constructor(input: GetRelationalDatabaseMetricDataCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabaseMetricDataCommandInput, GetRelationalDatabaseMetricDataCommandOutput>;
    private serialize;
    private deserialize;
}
