import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeAccountRequest, DescribeAccountResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAccountCommandInput = DescribeAccountRequest;
export declare type DescribeAccountCommandOutput = DescribeAccountResult & __MetadataBearer;
export declare class DescribeAccountCommand extends $Command<DescribeAccountCommandInput, DescribeAccountCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DescribeAccountCommandInput;
    constructor(input: DescribeAccountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAccountCommandInput, DescribeAccountCommandOutput>;
    private serialize;
    private deserialize;
}
