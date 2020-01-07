import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeDatasetGroupRequest, DescribeDatasetGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDatasetGroupCommandInput = DescribeDatasetGroupRequest;
export declare type DescribeDatasetGroupCommandOutput = DescribeDatasetGroupResponse & __MetadataBearer;
export declare class DescribeDatasetGroupCommand extends $Command<DescribeDatasetGroupCommandInput, DescribeDatasetGroupCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeDatasetGroupCommandInput;
    constructor(input: DescribeDatasetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDatasetGroupCommandInput, DescribeDatasetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
