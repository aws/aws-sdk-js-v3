import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { StartAssociationsOnceRequest, StartAssociationsOnceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartAssociationsOnceCommandInput = StartAssociationsOnceRequest;
export declare type StartAssociationsOnceCommandOutput = StartAssociationsOnceResult & __MetadataBearer;
export declare class StartAssociationsOnceCommand extends $Command<StartAssociationsOnceCommandInput, StartAssociationsOnceCommandOutput, SSMClientResolvedConfig> {
    readonly input: StartAssociationsOnceCommandInput;
    constructor(input: StartAssociationsOnceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartAssociationsOnceCommandInput, StartAssociationsOnceCommandOutput>;
    private serialize;
    private deserialize;
}
