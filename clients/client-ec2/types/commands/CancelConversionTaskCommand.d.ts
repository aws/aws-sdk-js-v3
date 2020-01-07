import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CancelConversionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelConversionTaskCommandInput = CancelConversionRequest;
export declare type CancelConversionTaskCommandOutput = __MetadataBearer;
export declare class CancelConversionTaskCommand extends $Command<CancelConversionTaskCommandInput, CancelConversionTaskCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CancelConversionTaskCommandInput;
    constructor(input: CancelConversionTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelConversionTaskCommandInput, CancelConversionTaskCommandOutput>;
    private serialize;
    private deserialize;
}
