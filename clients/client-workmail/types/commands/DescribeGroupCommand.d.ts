import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DescribeGroupRequest, DescribeGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeGroupCommandInput = DescribeGroupRequest;
export declare type DescribeGroupCommandOutput = DescribeGroupResponse & __MetadataBearer;
export declare class DescribeGroupCommand extends $Command<DescribeGroupCommandInput, DescribeGroupCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DescribeGroupCommandInput;
    constructor(input: DescribeGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGroupCommandInput, DescribeGroupCommandOutput>;
    private serialize;
    private deserialize;
}
