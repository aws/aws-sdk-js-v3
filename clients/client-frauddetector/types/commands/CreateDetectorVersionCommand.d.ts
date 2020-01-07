import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CreateDetectorVersionRequest, CreateDetectorVersionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDetectorVersionCommandInput = CreateDetectorVersionRequest;
export declare type CreateDetectorVersionCommandOutput = CreateDetectorVersionResult & __MetadataBearer;
export declare class CreateDetectorVersionCommand extends $Command<CreateDetectorVersionCommandInput, CreateDetectorVersionCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: CreateDetectorVersionCommandInput;
    constructor(input: CreateDetectorVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDetectorVersionCommandInput, CreateDetectorVersionCommandOutput>;
    private serialize;
    private deserialize;
}
