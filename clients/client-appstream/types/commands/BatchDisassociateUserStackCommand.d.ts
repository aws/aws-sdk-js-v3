import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { BatchDisassociateUserStackRequest, BatchDisassociateUserStackResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchDisassociateUserStackCommandInput = BatchDisassociateUserStackRequest;
export declare type BatchDisassociateUserStackCommandOutput = BatchDisassociateUserStackResult & __MetadataBearer;
export declare class BatchDisassociateUserStackCommand extends $Command<BatchDisassociateUserStackCommandInput, BatchDisassociateUserStackCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: BatchDisassociateUserStackCommandInput;
    constructor(input: BatchDisassociateUserStackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDisassociateUserStackCommandInput, BatchDisassociateUserStackCommandOutput>;
    private serialize;
    private deserialize;
}
