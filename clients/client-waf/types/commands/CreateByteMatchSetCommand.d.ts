import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { CreateByteMatchSetRequest, CreateByteMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateByteMatchSetCommandInput = CreateByteMatchSetRequest;
export declare type CreateByteMatchSetCommandOutput = CreateByteMatchSetResponse & __MetadataBearer;
export declare class CreateByteMatchSetCommand extends $Command<CreateByteMatchSetCommandInput, CreateByteMatchSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: CreateByteMatchSetCommandInput;
    constructor(input: CreateByteMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateByteMatchSetCommandInput, CreateByteMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}
