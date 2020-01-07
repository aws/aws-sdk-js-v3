import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeServiceErrorsRequest, DescribeServiceErrorsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeServiceErrorsCommandInput = DescribeServiceErrorsRequest;
export declare type DescribeServiceErrorsCommandOutput = DescribeServiceErrorsResult & __MetadataBearer;
export declare class DescribeServiceErrorsCommand extends $Command<DescribeServiceErrorsCommandInput, DescribeServiceErrorsCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeServiceErrorsCommandInput;
    constructor(input: DescribeServiceErrorsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeServiceErrorsCommandInput, DescribeServiceErrorsCommandOutput>;
    private serialize;
    private deserialize;
}
