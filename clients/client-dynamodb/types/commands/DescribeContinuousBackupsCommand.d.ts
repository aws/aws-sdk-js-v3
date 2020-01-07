import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeContinuousBackupsInput, DescribeContinuousBackupsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeContinuousBackupsCommandInput = DescribeContinuousBackupsInput;
export declare type DescribeContinuousBackupsCommandOutput = DescribeContinuousBackupsOutput & __MetadataBearer;
export declare class DescribeContinuousBackupsCommand extends $Command<DescribeContinuousBackupsCommandInput, DescribeContinuousBackupsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DescribeContinuousBackupsCommandInput;
    constructor(input: DescribeContinuousBackupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeContinuousBackupsCommandInput, DescribeContinuousBackupsCommandOutput>;
    private serialize;
    private deserialize;
}
