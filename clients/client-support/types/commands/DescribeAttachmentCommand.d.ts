import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { DescribeAttachmentRequest, DescribeAttachmentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAttachmentCommandInput = DescribeAttachmentRequest;
export declare type DescribeAttachmentCommandOutput = DescribeAttachmentResponse & __MetadataBearer;
export declare class DescribeAttachmentCommand extends $Command<DescribeAttachmentCommandInput, DescribeAttachmentCommandOutput, SupportClientResolvedConfig> {
    readonly input: DescribeAttachmentCommandInput;
    constructor(input: DescribeAttachmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SupportClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAttachmentCommandInput, DescribeAttachmentCommandOutput>;
    private serialize;
    private deserialize;
}
