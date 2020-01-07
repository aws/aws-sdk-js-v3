import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { DeleteIdentitiesInput, DeleteIdentitiesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteIdentitiesCommandInput = DeleteIdentitiesInput;
export declare type DeleteIdentitiesCommandOutput = DeleteIdentitiesResponse & __MetadataBearer;
export declare class DeleteIdentitiesCommand extends $Command<DeleteIdentitiesCommandInput, DeleteIdentitiesCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: DeleteIdentitiesCommandInput;
    constructor(input: DeleteIdentitiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIdentitiesCommandInput, DeleteIdentitiesCommandOutput>;
    private serialize;
    private deserialize;
}
