import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { BatchAssociateUserStackRequest, BatchAssociateUserStackResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchAssociateUserStackCommandInput = BatchAssociateUserStackRequest;
export declare type BatchAssociateUserStackCommandOutput = BatchAssociateUserStackResult & __MetadataBearer;
export declare class BatchAssociateUserStackCommand extends $Command<BatchAssociateUserStackCommandInput, BatchAssociateUserStackCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: BatchAssociateUserStackCommandInput;
    constructor(input: BatchAssociateUserStackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchAssociateUserStackCommandInput, BatchAssociateUserStackCommandOutput>;
    private serialize;
    private deserialize;
}
