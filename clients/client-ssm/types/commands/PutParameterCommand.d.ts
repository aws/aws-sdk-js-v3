import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { PutParameterRequest, PutParameterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutParameterCommandInput = PutParameterRequest;
export declare type PutParameterCommandOutput = PutParameterResult & __MetadataBearer;
export declare class PutParameterCommand extends $Command<PutParameterCommandInput, PutParameterCommandOutput, SSMClientResolvedConfig> {
    readonly input: PutParameterCommandInput;
    constructor(input: PutParameterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutParameterCommandInput, PutParameterCommandOutput>;
    private serialize;
    private deserialize;
}
