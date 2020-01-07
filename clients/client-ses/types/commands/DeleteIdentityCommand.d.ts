import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { DeleteIdentityRequest, DeleteIdentityResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteIdentityCommandInput = DeleteIdentityRequest;
export declare type DeleteIdentityCommandOutput = DeleteIdentityResponse & __MetadataBearer;
export declare class DeleteIdentityCommand extends $Command<DeleteIdentityCommandInput, DeleteIdentityCommandOutput, SESClientResolvedConfig> {
    readonly input: DeleteIdentityCommandInput;
    constructor(input: DeleteIdentityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIdentityCommandInput, DeleteIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
