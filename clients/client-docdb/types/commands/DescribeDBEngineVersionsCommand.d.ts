import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DBEngineVersionMessage, DescribeDBEngineVersionsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBEngineVersionsCommandInput = DescribeDBEngineVersionsMessage;
export declare type DescribeDBEngineVersionsCommandOutput = DBEngineVersionMessage & __MetadataBearer;
export declare class DescribeDBEngineVersionsCommand extends $Command<DescribeDBEngineVersionsCommandInput, DescribeDBEngineVersionsCommandOutput, DocDBClientResolvedConfig> {
    readonly input: DescribeDBEngineVersionsCommandInput;
    constructor(input: DescribeDBEngineVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBEngineVersionsCommandInput, DescribeDBEngineVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
