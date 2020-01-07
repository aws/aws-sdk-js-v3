import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CancelMLTaskRunRequest, CancelMLTaskRunResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelMLTaskRunCommandInput = CancelMLTaskRunRequest;
export declare type CancelMLTaskRunCommandOutput = CancelMLTaskRunResponse & __MetadataBearer;
export declare class CancelMLTaskRunCommand extends $Command<CancelMLTaskRunCommandInput, CancelMLTaskRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: CancelMLTaskRunCommandInput;
    constructor(input: CancelMLTaskRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelMLTaskRunCommandInput, CancelMLTaskRunCommandOutput>;
    private serialize;
    private deserialize;
}
