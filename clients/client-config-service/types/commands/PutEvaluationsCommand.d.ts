import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutEvaluationsRequest, PutEvaluationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutEvaluationsCommandInput = PutEvaluationsRequest;
export declare type PutEvaluationsCommandOutput = PutEvaluationsResponse & __MetadataBearer;
export declare class PutEvaluationsCommand extends $Command<PutEvaluationsCommandInput, PutEvaluationsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutEvaluationsCommandInput;
    constructor(input: PutEvaluationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutEvaluationsCommandInput, PutEvaluationsCommandOutput>;
    private serialize;
    private deserialize;
}
