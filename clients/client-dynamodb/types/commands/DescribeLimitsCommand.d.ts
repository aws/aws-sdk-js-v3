import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeLimitsInput, DescribeLimitsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLimitsCommandInput = DescribeLimitsInput;
export declare type DescribeLimitsCommandOutput = DescribeLimitsOutput & __MetadataBearer;
export declare class DescribeLimitsCommand extends $Command<DescribeLimitsCommandInput, DescribeLimitsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DescribeLimitsCommandInput;
    constructor(input: DescribeLimitsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLimitsCommandInput, DescribeLimitsCommandOutput>;
    private serialize;
    private deserialize;
}
