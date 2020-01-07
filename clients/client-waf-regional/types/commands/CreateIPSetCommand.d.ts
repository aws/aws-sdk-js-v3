import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { CreateIPSetRequest, CreateIPSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateIPSetCommandInput = CreateIPSetRequest;
export declare type CreateIPSetCommandOutput = CreateIPSetResponse & __MetadataBearer;
export declare class CreateIPSetCommand extends $Command<CreateIPSetCommandInput, CreateIPSetCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: CreateIPSetCommandInput;
    constructor(input: CreateIPSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateIPSetCommandInput, CreateIPSetCommandOutput>;
    private serialize;
    private deserialize;
}
