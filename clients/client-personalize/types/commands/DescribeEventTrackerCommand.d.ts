import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeEventTrackerRequest, DescribeEventTrackerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEventTrackerCommandInput = DescribeEventTrackerRequest;
export declare type DescribeEventTrackerCommandOutput = DescribeEventTrackerResponse & __MetadataBearer;
export declare class DescribeEventTrackerCommand extends $Command<DescribeEventTrackerCommandInput, DescribeEventTrackerCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeEventTrackerCommandInput;
    constructor(input: DescribeEventTrackerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventTrackerCommandInput, DescribeEventTrackerCommandOutput>;
    private serialize;
    private deserialize;
}
