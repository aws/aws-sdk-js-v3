import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { UpdateByteMatchSetRequest, UpdateByteMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateByteMatchSetCommandInput = UpdateByteMatchSetRequest;
export declare type UpdateByteMatchSetCommandOutput = UpdateByteMatchSetResponse & __MetadataBearer;
export declare class UpdateByteMatchSetCommand extends $Command<UpdateByteMatchSetCommandInput, UpdateByteMatchSetCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: UpdateByteMatchSetCommandInput;
    constructor(input: UpdateByteMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateByteMatchSetCommandInput, UpdateByteMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}
