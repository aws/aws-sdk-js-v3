import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GetParametersForImportRequest, GetParametersForImportResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetParametersForImportCommandInput = GetParametersForImportRequest;
export declare type GetParametersForImportCommandOutput = GetParametersForImportResponse & __MetadataBearer;
export declare class GetParametersForImportCommand extends $Command<GetParametersForImportCommandInput, GetParametersForImportCommandOutput, KMSClientResolvedConfig> {
    readonly input: GetParametersForImportCommandInput;
    constructor(input: GetParametersForImportCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetParametersForImportCommandInput, GetParametersForImportCommandOutput>;
    private serialize;
    private deserialize;
}
