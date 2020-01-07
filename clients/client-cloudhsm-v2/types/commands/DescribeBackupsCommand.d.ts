import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { DescribeBackupsRequest, DescribeBackupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeBackupsCommandInput = DescribeBackupsRequest;
export declare type DescribeBackupsCommandOutput = DescribeBackupsResponse & __MetadataBearer;
export declare class DescribeBackupsCommand extends $Command<DescribeBackupsCommandInput, DescribeBackupsCommandOutput, CloudHSMV2ClientResolvedConfig> {
    readonly input: DescribeBackupsCommandInput;
    constructor(input: DescribeBackupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBackupsCommandInput, DescribeBackupsCommandOutput>;
    private serialize;
    private deserialize;
}
