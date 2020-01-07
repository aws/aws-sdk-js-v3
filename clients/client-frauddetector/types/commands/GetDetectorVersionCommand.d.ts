import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetDetectorVersionRequest, GetDetectorVersionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDetectorVersionCommandInput = GetDetectorVersionRequest;
export declare type GetDetectorVersionCommandOutput = GetDetectorVersionResult & __MetadataBearer;
export declare class GetDetectorVersionCommand extends $Command<GetDetectorVersionCommandInput, GetDetectorVersionCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: GetDetectorVersionCommandInput;
    constructor(input: GetDetectorVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDetectorVersionCommandInput, GetDetectorVersionCommandOutput>;
    private serialize;
    private deserialize;
}
