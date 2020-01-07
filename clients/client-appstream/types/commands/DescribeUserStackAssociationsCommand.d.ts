import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeUserStackAssociationsRequest, DescribeUserStackAssociationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeUserStackAssociationsCommandInput = DescribeUserStackAssociationsRequest;
export declare type DescribeUserStackAssociationsCommandOutput = DescribeUserStackAssociationsResult & __MetadataBearer;
export declare class DescribeUserStackAssociationsCommand extends $Command<DescribeUserStackAssociationsCommandInput, DescribeUserStackAssociationsCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DescribeUserStackAssociationsCommandInput;
    constructor(input: DescribeUserStackAssociationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUserStackAssociationsCommandInput, DescribeUserStackAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
