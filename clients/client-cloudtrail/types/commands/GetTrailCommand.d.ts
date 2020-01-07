import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { GetTrailRequest, GetTrailResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTrailCommandInput = GetTrailRequest;
export declare type GetTrailCommandOutput = GetTrailResponse & __MetadataBearer;
export declare class GetTrailCommand extends $Command<GetTrailCommandInput, GetTrailCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: GetTrailCommandInput;
    constructor(input: GetTrailCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTrailCommandInput, GetTrailCommandOutput>;
    private serialize;
    private deserialize;
}
