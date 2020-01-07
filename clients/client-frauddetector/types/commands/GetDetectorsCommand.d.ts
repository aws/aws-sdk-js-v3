import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetDetectorsRequest, GetDetectorsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDetectorsCommandInput = GetDetectorsRequest;
export declare type GetDetectorsCommandOutput = GetDetectorsResult & __MetadataBearer;
export declare class GetDetectorsCommand extends $Command<GetDetectorsCommandInput, GetDetectorsCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: GetDetectorsCommandInput;
    constructor(input: GetDetectorsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDetectorsCommandInput, GetDetectorsCommandOutput>;
    private serialize;
    private deserialize;
}
