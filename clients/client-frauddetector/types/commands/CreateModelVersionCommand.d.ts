import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CreateModelVersionRequest, CreateModelVersionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateModelVersionCommandInput = CreateModelVersionRequest;
export declare type CreateModelVersionCommandOutput = CreateModelVersionResult & __MetadataBearer;
export declare class CreateModelVersionCommand extends $Command<CreateModelVersionCommandInput, CreateModelVersionCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: CreateModelVersionCommandInput;
    constructor(input: CreateModelVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateModelVersionCommandInput, CreateModelVersionCommandOutput>;
    private serialize;
    private deserialize;
}
