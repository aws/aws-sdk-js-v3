import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { UpdateFindingsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateFindingsCommandInput = UpdateFindingsRequest;
export declare type UpdateFindingsCommandOutput = __MetadataBearer;
export declare class UpdateFindingsCommand extends $Command<UpdateFindingsCommandInput, UpdateFindingsCommandOutput, AccessAnalyzerClientResolvedConfig> {
    readonly input: UpdateFindingsCommandInput;
    constructor(input: UpdateFindingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AccessAnalyzerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFindingsCommandInput, UpdateFindingsCommandOutput>;
    private serialize;
    private deserialize;
}
