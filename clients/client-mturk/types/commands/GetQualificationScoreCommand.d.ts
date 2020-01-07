import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { GetQualificationScoreRequest, GetQualificationScoreResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetQualificationScoreCommandInput = GetQualificationScoreRequest;
export declare type GetQualificationScoreCommandOutput = GetQualificationScoreResponse & __MetadataBearer;
export declare class GetQualificationScoreCommand extends $Command<GetQualificationScoreCommandInput, GetQualificationScoreCommandOutput, MTurkClientResolvedConfig> {
    readonly input: GetQualificationScoreCommandInput;
    constructor(input: GetQualificationScoreCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetQualificationScoreCommandInput, GetQualificationScoreCommandOutput>;
    private serialize;
    private deserialize;
}
